import './App.css';
import Cards from './components/SpecialCard';

export default function MediaCard() {
  return (
    <>
    <h1 className="bg-green-300 text-white-500 p-2xl rounded-2xl m-3">Chai aur code</h1>
    <Cards name={"lizard"} info={"lizards are type of reptile, this one is a green one called igauan or girgit"}/>
    <Cards name={"iguana"} info={"Iguana is a type of reptile, look like a lizard, this one isgreen"}/>
    </>
  );
}
