const { username, password } = process.env;
export const connectionStr: string =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.8iibq.mongodb.net/food-delivery-webapp?retryWrites=true&w=majority&appName=Cluster0";
