'use client'
import React,{useState,ChangeEvent} from "react";
interface FormData{
    name:string,
    email:string,
    message:string
}
const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name:"",
        email:"",
        message:""
    })
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name,value} =e.target
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const response = await fetch('/api/send-mail',{
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(formData)                    
            })
            const result = await response.json();
            if (result.status) {
                alert('Message sent successfully');
                // Reset form fields after success
                setFormData({
                  name: "",
                  email: "",
                  message: ""
                });
              } else {
                alert('Failed to send message');
              }
        }catch(error){
            console.error('Error in sending mail',error)
        }
    }
  return (
    <div className=''>  
        <div className='container mx-auto py-5' id='contact'>
        <h1 className='text-4xl text-center text-black'>Contact Me</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-3'>
            <div className='pb-4'>
            <div>
                <label className='text-[16px]'>
                Email:
                <code className='ms-2 text-[16px]'>avulanarayana.2016@gmail.com</code>
                </label>
            </div>
            <div className='mt-3'>
                <label className='text-[16px]'>
                Phone:
                <code className='ms-2 text-[16px]'>8328609577</code>
                </label>
            </div>
            <div className='mt-3'>
                <p className='text-[16px]'>
                LinkedIn:
                <a className='ms-2' href='https://www.linkedin.com/in/narayana-avula-355aa131a'>
                    https://www.linkedin.com/in/narayana-avula-355aa131a
                </a>
                </p>
            </div>
            <div className='mt-3'>
                <p className='text-[16px]'>
                Github url:
                <a className='ms-2 text-decoration-underline' href='https://github.com/Narayana2527'>
                    https://github.com/Narayana2527
                </a>
                </p>
            </div>
            <div className='mt-2'>
                <label className='block md:hidden text-[16px] text-black'>or leave me a message</label>
            </div>
            </div>
            <div className=''>
            <form id='myContact' onSubmit={handleSubmit}>
                <div className=''>
                <label className='' htmlFor='name'>Name</label>
                <input
                    className='mt-1 w-full px-2 rounded-xl border border-gray-500 shadow-md focus:ring-blue-500 py-3'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    id='name'
                    placeholder='Enter Name'
                />
                </div>
                <div className='mt-3'>
                <label className='' htmlFor='email'>Email</label>
                <input
                    className='mt-1 w-full rounded-xl px-2 border border-gray-500 shadow-md  py-3'
                    name='email'
                    required
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter Email'
                />
                </div>
                <div className='mt-3'>
                    <textarea
                        className='items-center rounded-xl px-2 w-full border border-gray-500 shadow-md '
                        name='message'
                        required
                        rows={3}
                        id='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Message'
                    />
                </div>
                <div className='mt-3'>
                <button
                    className='w-full text-center text-white bg-blue-700 px-4 py-2 border rounded-xl outline outline-3 outline-blue'
                    type='submit'
                >
                    Submit
                </button>
                </div>
            </form>
            
            </div>
        </div>
        </div>
    </div>
  );
};

export default Contact;
