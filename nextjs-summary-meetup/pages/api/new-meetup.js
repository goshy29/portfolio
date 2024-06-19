import { MongoClient } from "mongodb";

// /api/new-meetup
// our backend

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const { title, image, address, description } = data;

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

        try {
            const result = await db.collection("meetups").insertOne(data);
            data.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: "Storing message failed." });
            return;
        }

        client.close();

        res.status(201).json({ message: "Successfully stored Meetup!" });
    }
}

export default handler;