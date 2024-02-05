import React from "react";
import config from "../index.json";
import Image from "next/image";

const Contact = () => {
  const contact = config.contact;
  return (
    <>
      <div className="px-8 sm:px-12 md:px-48 pb-20 flex justify-center align-center flex-col bg-white">
        <h2 className="mt-12 uppercase font-Lato font-bold text-center text-black text-bold text-4xl">
          {contact.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3">
          <a
            href="https://www.instagram.com/elyiyivnzl?igsh=YjRpMjVwY3VtZzVp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="max-w-lg mx-auto my-10 rounded-lg shadow-md p-5">
              <Image
                width={100}
                height={100}
                className="rounded-full mx-auto"
                src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png"
                alt="Instagram"
              />
              <h2 className="text-center text-2xl font-Lato font-normal mt-3">
                elyiyivnzl
              </h2>
            </div>
          </a>

          <a href="https://www.tiktok.com/@el.yiyivnzl?_t=8jdOEhlRwBy&_r=1" target="_blank" rel="noopener noreferrer">
            <div className="max-w-lg mx-auto my-10 rounded-lg shadow-md p-5">
              <Image
                width={100}
                height={100}
                className="rounded-full mx-auto"
                src="https://cdn.icon-icons.com/icons2/2037/PNG/512/media_social_tiktok_icon_124256.png"
                alt="Tiktok"
              />

              <h2 className="text-center text-2xl font-Lato font-normal mt-3">
                El.yiyivznl
              </h2>
            </div>
          </a>

          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="max-w-lg mx-auto my-10 rounded-lg shadow-md p-5">
              <Image
                width={100}
                height={100}
                className="rounded-full mx-auto"
                src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png"
                alt="Facebook"
              />
              <h2 className="text-center text-2xl font-Lato font-normal mt-3">
                El yiyi
              </h2>
            </div>
          </a>

          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="max-w-lg mx-auto my-10 rounded-lg shadow-md p-5">
              <Image
                width={100}
                height={100}
                className="rounded-full mx-auto"
                src="https://cdn.icon-icons.com/icons2/840/PNG/512/Whatsapp_icon-icons.com_66931.png"
                alt="WhatsApp"
              />
              <h2 className="text-center text-2xl font-Lato font-normal mt-3">
                300 4545 4545
              </h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
