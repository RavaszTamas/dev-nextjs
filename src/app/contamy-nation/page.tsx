import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const DynamicMain = dynamic(() => import('../../components/contamy_nation/main'), {
    suspense: true,
    ssr: false
})

const ContamyNation = ({}) => {
    return (
        <Suspense fallback={`Loading...`}>
            <Head>
                <title>Contamy Nation</title>

            </Head>
            <DynamicMain />
        </Suspense>
    );
};

export default ContamyNation;
