import * as S from "./ErrorMessageStyle";
import React, {useEffect, useState} from "react";


const ErrorMessage = () => {

    const [message] = useState("Invalid or empty value");

    return <S.ErrorMessage>{message}</S.ErrorMessage>
};

export default ErrorMessage;
