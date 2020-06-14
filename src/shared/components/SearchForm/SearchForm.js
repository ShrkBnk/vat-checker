import React, {useState} from 'react';
import * as S from './SearchFormStyle'
import {fetchAgainstErplyChecker} from './SearchFormAPI'
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import DataView from './components/DataView/DataView'

const SearchForm = () => {

    const [vatNumber, setVatNumber] = useState("");
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(false);


    function checkVat(e) {
        e.preventDefault();
        setLoading(true);

        fetchAgainstErplyChecker(vatNumber).then((res) => {
            setLoading(false);
            if (res) setValues([res]);
            else setValues([])
        });
    }

    const InfoContainer = () => {

        if (loading) return <LoadingAnimation/>;

        if (values.length === 0) return <ErrorMessage/>;

        return <DataView titles={Object.keys(values[0])} data={values} />

    };

    return (
        <S.Container>

            <S.Form onSubmit={e => checkVat(e)}>
                <S.Input type="text" value={vatNumber} onChange={e => setVatNumber(e.target.value)}/>
                <S.Button>Search</S.Button>
            </S.Form>

            <InfoContainer/>

        </S.Container>
    );
};

export default SearchForm;
