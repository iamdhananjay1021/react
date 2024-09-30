import { useState, useTransition, useEffect } from "react";
import { getCountryData } from "../api/PostApi";
import { CountryCard } from "../components/Layout/CountryCard";// Ensure you have CountryCard imported
import Loader
 from "../components/Ui/Loader"; // Ensure you have Loader imported or replace it with your loading logic

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); // Add explicit loading state

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false); // Ensure loading is false once the fetch is complete
      }
    });
  }, []);

  // If data is loading, show Loader component
  if (loading) return <Loader />;

  return (
    <>
      <section className="country-section">
        <ul className="grid grid-four-cols">
          {countries.map((curCountry, index) => (
            <CountryCard country={curCountry} key={index} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Country;
