import BreadCrumb from "../components/global/BreadCrumbs"
export default function Contact(){
    return(
        <>
        <BreadCrumb category_name="Contact Us" />
        <div className="grid my-10 ">
        <div className="map grid justify-center my-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746527.452679472!2d90.3443647!3d23.506657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2s!4v1707497951706!5m2!1sen!2s" width="1200" height="500" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contact grid grid-cols-3">
            <div className="contact_form col-span-2 ml-[10%]">
                <div className="title">
                    <span>Contact Form</span>
                </div>
                <div className="grid grid-cols-4 form">
                    <div className="grid mx-4">
                        <label htmlFor="">Your Name *</label>
                        <input type="text" className="bg-slate-200" />
                    </div>
                    <div className="grid mx-4">
                        <label htmlFor="">Email Address *</label>
                        <input type="text" className="bg-slate-200" />
                    </div>
                    <div className="grid mx-4">
                        <label htmlFor="">Title *</label>
                        <input type="text" className="bg-slate-200" />
                    </div>
                </div>
                    <div className="grid my-2 ml-4">
                        <label htmlFor="">Your comments *</label>
                        <textarea name="" className="bg-slate-200" id="" cols={30} rows={10}></textarea>
                    </div>
                    <div className="send_message bg-red-600 text-white text-center rounded-md ml-4 p-2">
                        <button>Send Message</button>
                    </div>
            </div>
            <div className="address_info p-4">
                <div className="title">
                    <span>Information</span>
                </div>
                <div className="details p-4">
                    <span className="my-10">
                House-51/1,Senpara, Mirpur-10, Dhaka-1216
                    </span>
                    <br />
                    <br />
                    <span>
+(88) +8801848375505
<br />
+(88) +8801848375505
                    </span>
<br />
<br />
<span>
support@runleatherbd.com
</span>

                </div>
            </div>
        </div>
        </div>
        </>
    )
}