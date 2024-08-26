import checkoutImg from '../../assets/images/checkout-img.jpeg'


export default function CheckoutTitle() {
  return (
    <div className='relative z-40 '>
    <div className="relative overflow-hidden w-full h-[150px] bg-white">
        <img
            className="absolute w-full h-full object-cover animate-moveVertical"
            src={checkoutImg}
            alt="Cart"
        />
        <div className="absolute top-1/2 left-0 z-10 p-4 transform -translate-y-1/2">
            <h3 className="text-3xl p-20 font-eb-garamond text-white uppercase tracking-wider leading-[5.1em]">
            Cart
            </h3>
        </div>
        </div>
    </div>
  )
}



















