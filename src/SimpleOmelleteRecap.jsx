
export default function SimpleOmelleteRecap() {
const prepearation=[
    { id:1,title:"Total:",pargraph:"Approximately 10 minutes"},
    {id:2,title:'Preparation:',pargraph:" 5 minutes"},
  {id:3,title:'Cooking:',pargraph:" 5 minutes"}];
const ListPrep=prepearation.map((items)=>{
    return(
        <li key={items.id}className="list-disc" > <strong className="text-[#4A3F35]">{items.title}</strong> {items.pargraph} </li>)
})
// ----------------------------------------------
const ingrediants=[
    { id:1,title:"2-3 large eggs"},
    {id:2,title:'Salt,to taste'},
  {id:3,title:'Pepper,to taste'},
  {id:4,title:'1 tablespoon of butter or oil'},
  {id:5,title:'Optional fillings:cheese,diced vegetables,cooked meats,herbs'},
];
const ListIngred=ingrediants.map((items)=>{
    return(
        <li key={items.id} className="list-disc">{items.title} </li>)
})
// -------------------------------------------------------------------
const Instructions=[
    { id:1,title:"Beat the eggs:",declration:`In a bowl, beat the eggs with a pinch of salt and pepper until they
       are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
      `},
    {id:2,title:'Heat the pan:',declration:`Place a non-stick frying pan over medium heat and add butter or oil
      `},
  {id:3,title:'Cook the omellete:',declration:`Once the butter is melted and bubbling, pour in the eggs.
     Tilt the pan to ensure the eggs evenly coat the surface.`},
  {id:4,title:'Add fillings(optional):',declration:`When the eggs begin to set at the edges but are still slightly
     runny in the middle, sprinkle your chosen fillings over one half of the omelette.`},
  {id:5,title:'Fold and serve:',declration:`As the omelette continues to cook, carefully lift one edge 
    and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.`},
   {id:5,title:'Enjoy:',declration:"Serve hot, with additional salt and pepper if needed"},
];
const ListInstr=Instructions.map((items)=>{
    return(
        <li key={items.id} className="list-decimal"><strong className="text-[#4A3F35]">{items.title}</strong> {items.declration} </li>)
})
// -----------------------------Table-----------------------------
const Nutrition=
[{ id:1,title:"Calories",value:"277kcal"},
{id:2,title:"Carbs",value:"0g"},
{id:3,title:"Protein",value:"20g"},
{title:"Fat",value:"22g"},
];
const ListRow= Nutrition.map((items)=>{
  return(
    <tr key={items.id}>
      <td className="text-[#474747]">{items.title}</td>
      <td className="text-orange-900 font-bold">{items.value}</td>
    </tr>
  )
})
  return (
    <div className='bg-[#F3E5D8] min-h-screen flex  flex-col items-center justify-center'>
      <div className=' h-lvh  w-1vw border-4 border-white md:border-0 md:h-fit lg:p-6  lg:rounded-3xl lg:w-4xl bg-white  flex flex-col lg:m-24'>
<img src="/images/image-omelette.jpeg" alt="omlette image" />
<h1 className="font-serif font-bold text-5xl text-[#2D2D2D] mt-3">Simple Omlette Recipe</h1>
<p className='ont-outfit text-[16px] text-[#6E6E6E]  mt-3'>
An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection,
optionally filled with your choice of cheese, vegetables, or meats.
</p>
{/* ------------------------1-------------------------------------------- */}
<ul className="bg-[#F8EAF4] mt-3 p-6 border-0 rounded-sm">
  <h2 className="font-bold text-pink-800 text-1xl">Preparation time</h2>
{ListPrep}
</ul>
{/* -----------------------------2---------------------------------- */}

<ul className="p-4">
  <h1 className=" font-serif font-bold text-3xl text-orange-900">Ingredients</h1>
{ListIngred}
</ul>
<hr className="border border-gray-300"/>
{/* ---------------------------3------------------------------------- */}
<ul className="p-4">
  <h1 className=" font-serif font-bold text-orange-900 text-2xl">Instructions</h1>
{ListInstr}
</ul>
<hr className="  border border-gray-300" />
<h1 className=" font-serif text-3xl text-orange-900   font-bold mt-2">Nutriation</h1>
<p className="mt-2 mb-2">The table below shows nutritional values per serving without the additional fillings.</p>
<table>
  {ListRow}
</table>
      </div>
    </div>
  )
}

