import Head from 'next/head';
import Layout from '@/components/Layout';



const MainContent = () => {
    return (
        <>
            <p>Testing. </p>
        </>
    )

};


/** Render data
 * ---------------------------------
*/
const About = () => {

    return (
        <>
            <Head>
                <title>Testing</title>
            </Head>


            <Layout
                pageTitle="About"
                contentComponent={<><MainContent /></>}
            />


        </>
    )
};


export default About;
