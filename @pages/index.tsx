import Head from 'next/head';
import { useEffect } from 'react';
import Button from '@/components/Buttons';
import Layout from '@/components/Layout';
import SocialMetadata from '@/components/SocialMetadata';


import SvgIcon from "../public//assets/images/icon.svg";
import CRUDService from "@/utils/data-service/crud";

import appData from "@/data/app.json";

// store
import { store } from "@/store/createStore";
import getMenuData from "@/store/actions/demoMenuActions";


const MainContent = () => {
    return (
        <>
            <p>
                Welcome to Shaka Shifts!
            </p>
            <p className="buttons">
                <Button bgColor='' btnName={<><SvgIcon width="15" style={{ verticalAlign: 'text-top', marginRight: '10px' }} fill="#0576a0" />About US</>} href="/about.html" />
            </p>

        </>
    )

};

const Home = ({initialReduxState}) => {

    useEffect(() => {

        // init php data
        //-----
        CRUDService.initData();
        
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return (
        <>

            <Head>
                <title>Aloha!</title>
                <meta name="description" content="Welcome to Shaka Shifts!" />

                <SocialMetadata
                    ogTitle={`Aloha!`}
                    ogDesc={`Welcome to Shaka Shifts!`}
                    ogUrl={`${appData.siteUrl}/`}
                    ogImage={`${appData.siteUrl}/assets/images/logo-black.png`}
                />
            </Head>

            <Layout
                isHome={true}
                ssrNav={initialReduxState?.menuData.menuItems}
                pageTitle="Aloha!"
                contentComponent={<><MainContent /></>}
            />

        </>
    )
}


/** This gets called on every request 
 * ---------------------------------
*/
export async function getStaticProps() {

    let res: any = null;

    try {


        // Get store
        const action = await getMenuData(); // {type: 'RECEIVE_DEMO_MENU', payload: [...]}
        store.dispatch(action);
        res = store.getState();
        /*
        {
        menuData: {
            menuItems: [...]
            }
        }        
        */

    } catch (err) { };



    // Pass data to the page via props
    return {
        props: {
            initialReduxState: res
        },

        // Incremental Static Regeneration. (Next.js will attempt to re-generate the page:)
        // !!! IMPORTANT:  Error: ISR cannot be used with "output: export"
        revalidate: process.env.exportHtml == 'true' ? undefined : 10, // In seconds 
    }
}

export default Home;
