interface Iprops {
    name: string;  // compulsary hai yeh props abhi pass hi pass karo 
    // name?: string; // This is the way to make props not compulsary
};

export function WelcomeL2(props: Iprops) {
 //  props are immutable and read only,  so you can't change here as like
//  props.name = "Riya";  // Cannot assign to read only property 'name' of object '#<Object>'

 return <div>{props.name}</div>;
 
    // Another way to get props is object destructuring
    //  const {name} = props;
    //  return <div>{name}</div>;
}