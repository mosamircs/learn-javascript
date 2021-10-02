const point0 = [10, 25, -34];

const x0 = point0[0];
const y0 = point0[1];
const z0 = point0[2];

console.log(x0, y0, z0);

const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

console.log(type, color, carat);

const point1 = [10, 25, -34];

const [x, y, z] = point1;

console.log(x, y, z);

let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;
console.log(first,second,third);


const gemstone1 = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
  };
  
  const {type1, color1, carat1} = gemstone1;
  
  console.log(type1, color1, carat1);


  const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let {radius, getArea, getCircumference} = circle;
  console.log(radius);
  console.log(getArea())
  console.log(getCircumference());