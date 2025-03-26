"use client";
import { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { checkoutValidation } from "@/schemas/checkoutFormValidation";
import OrderInfo from "./OrderInfo";
import CheckoutForm from "../shared/forms/CheckoutForm";
import SubmitButton from "../shared/forms/formComponents/SubmitButton";
import { useRouter } from "next/navigation";
import { handleSubmitForm } from "@/utils/handleSubmitForm";
import { generateOrderNumber } from "@/utils/generateOrderNumber";
import { useCartStore } from "@/store/cartStore";

export interface ValuesCheckoutFormType {
  name: string;
  phone: string;
  address: string;
  payment: string;
}

const initialValues: ValuesCheckoutFormType = {
  name: "",
  phone: "",
  address: "",
  payment: "Сплатити при отриманні",
};

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const router = useRouter();

  const { getTotalAmount, cartItems } = useCartStore();

  const validationSchema = checkoutValidation();

  const submitForm = async (
    values: ValuesCheckoutFormType,
    formikHelpers: FormikHelpers<ValuesCheckoutFormType>
  ) => {
    const orderNumber = generateOrderNumber();
    const totalSum = getTotalAmount();
    // Формуємо дату та час замовлення
    const now = new Date();
    // Форматуємо дату
    const formattedDate = now.toLocaleDateString("uk-UA");
    // Форматуємо час
    const formattedTime = now.toLocaleTimeString("uk-UA");
    // Об'єднуємо дату та час
    const orderDate = `${formattedDate} ${formattedTime}`;
    const orderedListProducts = cartItems
      .map(
        (cartItem) =>
          `- ${cartItem.title}, ціна: ${cartItem.price}, кількість: ${cartItem.quantity}`
      )
      .join("\n");

    const data =
      `<b>Замовлення #${orderNumber}</b>\n` +
      `<b>Дата замовлення:</b> ${orderDate}\n` +
      `<b>Ім'я:</b> ${values.name.trim()}\n` +
      `<b>Телефон:</b> ${values.phone.replace(/[^\d+]/g, "")}\n` +
      `<b>Адреса:</b> ${values.address.trim()}\n` +
      `<b>Оплата:</b> ${values.payment.trim()}\n` +
      `<b>Список страв:</b>\n${orderedListProducts}\n` +
      `<b>Сума замовлення:</b> ${totalSum} грн\n`;

    await handleSubmitForm<ValuesCheckoutFormType>(
      formikHelpers,
      setIsLoading,
      setIsError,
      setIsNotificationShown,
      data,
      router
    );
  };

  return (
    <section className="overflow-hidden">
      <div className="container xl:max-w-[1280px] pt-[108px] xl:pt-[136px] pb-[120px] xl:pb-[120px]">
        <h1 className="mb-10 text-24semi xl:text-36semi leading-[123%]">
          Оформлення замовлення
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {(formik) => (
            <Form className="flex flex-col xl:flex-row gap-y-10 xl:gap-x-5">
              <CheckoutForm formik={formik} />
              <div className="xl:w-[402px] xl:p-7 xl:border xl:border-black xl:rounded-[8px]">
                <OrderInfo />
                <SubmitButton
                  onClick={formik.submitForm}
                  dirty={formik.dirty}
                  isValid={formik.isValid}
                  isLoading={isLoading}
                  className="py-[15px] w-full max-w-[346px] mx-auto text-14med"
                >
                  Оформити замовлення
                </SubmitButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
