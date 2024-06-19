import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
    const router = useRouter();

    async function handlerAddMeetup(meetupData) {
        //console.log(meetupData);

        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();

        console.log(data);

        router.push("/");
    }

    return (
        <>
            <Head>
                <title>Add a new Meetup</title>
                <meta name="description" content="Add your own Meetup." />
            </Head>
            <NewMeetupForm onAddMeetup={handlerAddMeetup} />
        </>
    );
}

export default NewMeetupPage;