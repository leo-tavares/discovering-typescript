interface Car {
  name: string;
  brand: string;
  motor: boolean;
  dimensions: {
      h: number;
      w: number;
  }
}

type CarPreview = Pick<Car, "name" | "brand">;

const carSummary: CarPreview = {
  name: "sandero rs",
  brand: "renault",
};

console.log(carSummary);
