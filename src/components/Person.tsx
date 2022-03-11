import React, { FC, ChangeEvent, useState } from "react";

export enum HairColor {
  Blonde = "good for you",
  Brown = "cool",
  Pink = "Wow",
}

interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}

export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>();
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input
        type="text"
        placeholder="write down your country.. "
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCountry(e.target.value)
        }
      />
      {country}
      {hairColor}
    </div>
  );
};
