import CustomizedInput from "@/components/shared/forms/formComponents/CustomizedInput";
import MaskedInput from "react-text-mask";
import { PHONE_NUMBER_MASK } from "@/regex/regex";

interface CheckoutFormProps {
  formik: FormikProps<ValuesCheckoutFormType>;
  // setIsLoading: Dispatch<SetStateAction<boolean>>;
  // setIsError: Dispatch<SetStateAction<boolean>>;
  // setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
}

export default function CheckoutForm({ formik }: CheckoutFormProps) {
  return (
    <>
      <div className="h-fit xl:w-[349px] p-7 border border-black rounded-[8px]">
        <h2 className="mb-7 xl:mb-6 text-20med leading-[123%]">
          Особисті дані
        </h2>
        <div className="flex flex-col gap-y-4">
          <CustomizedInput
            fieldName="name"
            label={"Ім’я"}
            required={true}
            placeholder={"Ім’я"}
            errors={formik.errors}
            touched={formik.touched}
          />
          <CustomizedInput
            fieldName="phone"
            as={MaskedInput}
            mask={PHONE_NUMBER_MASK}
            inputType="tel"
            label={"Номер телефону"}
            required={true}
            placeholder={"Номер телефону"}
            errors={formik.errors}
            touched={formik.touched}
          />
          <CustomizedInput
            fieldName="address"
            label={"Адреса доставки"}
            required={true}
            placeholder={"Адреса доставки"}
            errors={formik.errors}
            touched={formik.touched}
          />
        </div>
      </div>
      <div className="h-fit xl:w-[349px] p-7 border border-black rounded-[8px]">
        <h2 className="mb-7 xl:mb-6 text-20med leading-[123%]">Оплата</h2>
      </div>
    </>
  );
}
