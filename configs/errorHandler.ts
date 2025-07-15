import { ToasterContext } from "@/context/ToasterContext";
import { useContext } from "react";

export default function ErrorHandler(error: any) {
  const { setToaster } = useContext(ToasterContext);

  if (error) {
    console.log("error.response");
    console.log(error.response);
    let message;
    if (error.response) {
      message = error.response.data.msg;

      if (typeof message === "string") {
        setToaster({
          variant: "danger",
          message,
        });
      }

      return error;
    }
  }
}
