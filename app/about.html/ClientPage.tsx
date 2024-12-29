'use client'


import Layout from '@/components/Layout';


const MainContent = () => {
    return (
        <>
            <p>This is a web app made by me to see </p>
   
        </>
    )

};

export default function ClientPage(props) {

    return (
        <>
  
            <Layout
                pageTitle="About"
                contentComponent={<><MainContent /></>}
            />


        </>
    )
}

