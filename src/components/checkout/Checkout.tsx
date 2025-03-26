"use client";
import { Form, Formik, FormikHelpers } from "formik";
import OrderInfo from "./OrderInfo";
import CheckoutForm from "../shared/forms/CheckoutForm";

export interface ValuesCheckoutFormType {
  name: string;
  phone: string;
  address: string;
  payment: string;
}

export default function Checkout() {
  const initialValues: ValuesCheckoutFormType = {
    name: "",
    phone: "",
    address: "",
    payment: "Сплатити при отриманні",
  };

  return (
    <section className="overflow-hidden">
      <div className="container xl:max-w-[1280px] pt-[108px] xl:pt-[136px] pb-[120px] xl:pb-[120px]">
        <h1 className="mb-10 text-24semi xl:text-36semi leading-[123%]">
          Оформлення замовлення
        </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={() => console.log("submit form")}
        >
          {(formik) => (
            <Form className="flex flex-col xl:flex-row gap-y-10 xl:gap-x-5">
              <CheckoutForm formik={formik} />
              <div className="xl:p-7 xl:border xl:border-black xl:rounded-[8px]">
                <OrderInfo />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
