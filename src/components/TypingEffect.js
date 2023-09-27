import { TypeAnimation } from 'react-type-animation';
const TypingEffect = () => {
  return (
    <div className='wrap'>
      <TypeAnimation className='typingText'
        sequence={[
          "I'm a Developer",
          3000,
          "I'm an Enjoyer",
          3000,
          "I'm an Investor",
          3000,
          "I am 김동원",
          20000,

        ]}
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypingEffect;
