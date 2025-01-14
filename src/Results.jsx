import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            id={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.state}, ${pet.city}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
