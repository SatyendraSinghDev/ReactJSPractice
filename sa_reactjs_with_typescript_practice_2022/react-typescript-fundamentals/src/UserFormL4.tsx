import {useState} from "react";

interface IUserForm {
    name: string;
    // age: number;     // number ko hum null value nahi de skte hai 
    // age: number | null; // Aise ab de skte hai 
    age: number;
}

const defaultFormValue = {
    name: '',
    // age: null
    age: 0
}

export function UserFormL4(props: IUserForm) {

 const [form, setForm ] = useState<IUserForm>(defaultFormValue);
 
 const onChangeName = (event: any) => {
    setForm({
        ...form,   // jo form mein phele hai wo ajyega
        name: event.target.value  // bs name ise replace ho jaye
    });
 };

 const onChangeAge = (event: any) => {
    setForm({
        ...form,   
        age: event.target.value 
    });
 };

 const onSubmitForm = () => {
    console.log("form => ", form);
    // Api call to update our db
 }

 return (
    <div>
        User Name: <input type="text" name="username" value={form.name} onChange={onChangeName} />
        <br />
        User Age: <input type="text" name="userage" value={form.age} onChange={onChangeAge} />
        <button onClick={onSubmitForm}>Submit</button>
    </div>
 )
}
