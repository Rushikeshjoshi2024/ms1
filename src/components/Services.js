// import styled from "styled-components";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FcHome } from "react-icons/fc";
import { MdAutoGraph } from "react-icons/md";
// import '../components/component.css';
import { FcMoneyTransfer } from "react-icons/fc";

const Services = () => {
  return (
    // <div >
    //   <h2 style={{ textAlign: "center" }} className="heading">Our services</h2>
    //   <div className="container" >
    //     <div className="grid grid-three-column">
    //       <div className="services-1">
    //         <div>
    //           <FcHome className="icon" />
    //           {/* <h3 style={{ maxWidth: "40rem", padding: "1rem" }} className="text text1">Find the best construction material for your Home</h3> */}
    //         </div>
    //       </div>

    //       <div className="services-2">
    //         <div className="services-colum-2">
    //           <div>
    //             <MdAutoGraph className="icon icon1" />
    //             {/* <h3 className="text">wide variety of products</h3> */}
    //           </div>
    //         </div>
    //         <div className="services-colum-2">
    //           <div>
    //             <VscVerifiedFilled className="icon icon1" />
    //             {/* <h3 className="text">wide variety of brands</h3> */}
    //           </div>
    //         </div>
    //       </div>

    //       <div className="services-3">
    //         <div>
    //           <FcMoneyTransfer className="icon" />
    //           <h3 style={{ padding: "1rem" }} className="text text1">Sell your remaining construction material</h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div>
      <h2 style={{ textAlign: "center" }} className="heading">Our services</h2>

      <div className="our-services-section">
        {/* First Column with 1 Row */}

        <div className="column">
          <div className=" service-2">
            <FcHome className="icon" />
            {/* <h3>Service 1</h3> */}
            <p>Find the best construction material for your Home</p>
            {/* <a href="/service1">Learn More</a> */}
          </div>
        </div>

        {/* Second Column with 2 Rows */}
        <div className="column">
          <div className="service ">
            <MdAutoGraph className="icon " />
            {/* <h3>Service 2</h3> */}
            <p>wide variety of products</p>
            {/* <a href="/service2">Learn More</a> */}
          </div>

          <div className="service service-1">
            <VscVerifiedFilled className="icon " />
            <p>wide variety of brands</p>
          </div>
        </div>

        {/* Third Column with 1 Row */}
        <div className="column">
          <div className=" service-2">
            <FcMoneyTransfer className="icon" />
            {/* <h3>Service 4</h3> */}
            <p>Sell your remaining construction material</p>
            {/* <a href="/service4">Learn More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// const Wrapper = styled.section`
//   padding: 20rem 0;

//   .grid {
//     gap: 4.8vw;
//             display: flex;
//             flex-direction: row;
//             margin-top:-5vw;

//   }

// .services-1,
// .services-2,
// .services-3 {
// width: auto;
// height: 30rem;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-content: center;
// background: ${({ theme }) => theme.colors.bg};
// text-align: center;
// border-radius: 2rem;
// box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

// }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .text{
//       font-size:1.5rem;  
//       margin-left:-1.5rem;
//       padding:1rem;

//     }
//     .icon{
//   width: 5rem;
//   height: 5rem;
//   padding: 1rem;
//   margin:1rem;
//   border-radius: 50%;
//   background-color: #fff;
//   color: #5138ee;
//     }

//   .icon1{
//     width: 5rem;
//   height: 5rem;
//   // padding: 1rem;
//   border-radius: 50%;
//   background-color: #fff;
//   color: #5138ee;
//   margin-left:-1rem;
//   }
//   .text1{
//     margin-right:-1rem;

//   }
//   .services-colum-2{
//     width:35vw;
//   }
//   .heading{
//     margin-top:-35vw;
//     width:100vw;
//   }
// }
// .heading{
//   width:100vw;
// }
// .services-1:hover{
//     transform: scale(1.1);
//     transition-duration: 0.5s;

// }
// .services-3:hover{
//     transform: scale(1.1);
//     transition-duration: 0.5s;

// }
// .services-colum-2:hover{
//     transform: scale(1.1);
//     transition-duration: 0.5s;

// }
//   .services-2 {
//     gap: 5vw;
//     background-color: transparent;
//     box-shadow: none;

//   .services-colum-2 {
//     background: ${({ theme }) => theme.colors.bg};
//     display: flex;
//     flex-direction: row;
//     flex: 1;
//     justify-content: center;
//     align-items: center;
//     border-radius: 2rem;
//     box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

//     div {
//       display: flex;
//       flex-direction: row;
//       justify-content: center;
//       align-items: center;
//       gap: 1rem;
//     }
//   }
// }

// h3 {
//   margin-top: 1.4rem;
//   font-size: 2rem;
// }

// .icon {
//   /* font-size: rem; */
//   width: 8rem;
//   height: 8rem;
//   padding: 2rem;
//   border-radius: 50%;
//   background-color: #fff;
//   color: #5138ee;
//   margin-left:1rem;
// }
// `;
export default Services;