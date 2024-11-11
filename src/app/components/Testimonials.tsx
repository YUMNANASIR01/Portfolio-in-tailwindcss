import React from 'react';
import Image from 'next/image';

function Testimonials() {
  return (
   <>
     <section id="testimonials" className="bg-[#424140] py-40 px-4 md:px-8">
      <div className="text-white text-center">
        <h4 className="text-white text-4xl lg:text-5xl font-[Caveat]  font-bold">
          <span>
            <span className="text-[purple]">W</span>hat{' '}
            <span className="text-[purple]">O</span>ther{' '}
            <span className="text-[purple]">P</span>eople{' '}
            <span className="text-[purple]">S</span>ay
          </span>
        </h4>


        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: '/myImage/pic1.jpg', alt: 'Alice', title: 'Alice', role: 'javascript developer' },
              { src: '/myImage/pic2.jpg', alt: ' Ben', title: ' Ben', role: 'android developer' },
              { src: '/myImage/pic3.jpg', alt: 'Charlie', title: 'Charlie', role: 'IOS developer' },
             
            ].map((person, index) => (
              <div
                key={index}
                className="mx-auto py-8 px-2 md:px-4 border-t-[3px] border-solid border-light-beige rounded-2xl select-none bg-[#1a1a1a] cursor-grab flex flex-col justify-center items-center"
              >
                <div className="w-[10rem] border-[3px] border-solid border-text-[#a9927d]  p-4 height-[20px] test">
                  <Image
                    src={person.src}
                    alt={person.alt}
                    width={280}
                    height={200}
                    className="w-full h-full "
                  />
                </div>
                <p className="mt-4">{person.title}</p>
                <p className="my-4 text-[purple]">{person.role}</p>
                <p className="w-[95%] md:w-[98%] mx-auto mb-6 leading-7 text-center font-medium">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
   </>
  );
}

export default Testimonials;






