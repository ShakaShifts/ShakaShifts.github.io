'use client'


import Layout from '@/components/Layout';


const MainContent = () => {
    return (
        <>
            <p>This web app is a project I created to showcase everything I’ve learned from a software engineering class. It’s also inspired by my uncle, who is a Systems Administrator at Hawaiian Airlines, and who also told me my projects were garbage lol. My previous experience working at Target gave me the idea—there, we had an app that displayed our shifts, allowed us to pick up shifts dropped by others, and provided a wealth of other helpful features. I wanted to bring that functionality to life using my newfound software engineering skills.
            </p>
   
        </>
    )

};

export default function ClientPage(props) {

    return (
        <>
  
            <Layout
                isHome={true}
                pageTitle="About"
                contentComponent={<><MainContent /></>}
            />


        </>
    )
}

