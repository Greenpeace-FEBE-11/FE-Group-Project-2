import React from "react"
import Penanggulangan1 from "../components/Penanggulangan/Penanggulangan1"
import Penanggulangan2 from "../components/Penanggulangan/Penanggulangan2"
import DataFetching1 from "../components/DataFetching/DataFetching1"
import DataFetching2 from "../components/DataFetching/DataFetching2"
import DataFetching3 from "../components/DataFetching/DataFetching3"
import Penanggulangan3 from "../components/Penanggulangan/Penanggulangan3"

const PenanggulanganPage = () => {
    return(
        <>
            <DataFetching1/>
            <Penanggulangan1/>
            <DataFetching2/>
            <Penanggulangan2/>
            <DataFetching3/>
            <Penanggulangan3/>
        </>
    )
}

export default PenanggulanganPage