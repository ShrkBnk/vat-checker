import * as S from "./DataViewStyle";
import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const DataView = ({ titles, data }) => {

    if (!data[0].Valid) return <ErrorMessage/>;

    return <S.Data>

        <S.Table>

            <thead>
                <tr>
                    {titles.map((title, index) => {

                        if(title === "Valid") return null;

                        return (
                            <th key={index}>{title}</th>
                        )
                    })}
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {titles.map((title, index) => {

                            if(title === "Valid") return null;

                            return (
                                <td key={index}>{item[title]}</td>
                            )
                        })}
                    </tr>
                ))}
            </tbody>

        </S.Table>

    </S.Data>;
};

export default DataView;
