import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A first meetup",
        image: "https://www.redfin.com/blog/wp-content/uploads/2023/12/New-York-City.jpg",
        address: "Address 1",
        description: "This is a first meetup!"
    },
    {
        id: "m2",
        title: "A second meetup",
        image: "https://olt-alert.ro/wp-content/uploads/2016/07/Bulgaria-Harta-orase-Bulgaria-e1467682619207.jpg",
        address: "Address 2",
        description: "This is a second meetup!"
    }
]

function HomePage(props) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list ot Meetups." />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    );
}

// Here, first we execute getStaticProps() and then component function HomePage()
export async function getStaticProps(context) {
    const res = context.res;

    // fetch data from API
    let client;
    try {
        client = await MongoClient.connect(
            "mongodb+srv://georgidobromirov:uPf2SC4NvshME5IO@cluster0.h7tn47h.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
        );
        //console.log(newMessage);
    } catch (error) {
        res.status(500).json({ message: "Could not connect to database" });
        return;
    }

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10
    }
}


// This function now will nor run ot during the build process, but always on the server after deployment
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;