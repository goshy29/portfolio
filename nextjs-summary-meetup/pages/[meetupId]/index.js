import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import Head from "next/head";

function MeetupDetailPage(props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetails
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
    );
}

export async function getStaticPaths(context) {
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

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: "blocking",
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;

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

    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetailPage;