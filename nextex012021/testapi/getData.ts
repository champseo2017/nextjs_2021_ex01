export async function getData() {
  const myData = await fetch("http://localhost:3000/api/services");
  return myData;
}

export default async (req, res) => {
  const myData = await getData();
  res.json(myData);
};
