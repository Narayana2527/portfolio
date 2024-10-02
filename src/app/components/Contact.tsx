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
        <div className='grid grid-cols-1 md:grid-cols-2 py-[50px]'>
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
                <a className=' text-black' href='https://www.linkedin.com/in/narayana-avula-355aa131a'>
                    LinkedIn:
                    <code className="ms-2 text-blue-600">https://www.linkedin.com/in/narayana-avula-355aa131a</code>
                </a>
            </div>
            <div className='mt-3'>             
                <a className='test-black' href='https://github.com/Narayana2527'>Github url:
                    <code className="text-blue-600 ms-2">https://github.com/Narayana2527</code>
                </a>
            </div>
            <div className='mt-2'>
                <label className='block md:hidden text-[16px] text-black'>or leave me a message</label>
            </div>
            </div>
            <div className='px-2'>
            <form id='myContact' onSubmit={handleSubmit}>
                <div className=''>
                <label className='' htmlFor='name'>Name</label>
                <input
                    className='mt-1 w-full px-2 rounded-xl  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-duration-150 ease-in-out border py-3'
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
                    className='mt-1 w-full px-2 rounded-xl  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-duration-150 ease-in-out border py-3'
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
                        className='w-full px-2 rounded-xl  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-duration-150 ease-in-out border py-3'
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
