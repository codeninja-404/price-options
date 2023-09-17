import { BsFillCartCheckFill } from 'react-icons/bs';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center justify-center gap-2' ><BsFillCartCheckFill className='text-gray-200'></BsFillCartCheckFill> {feature}</p>
        </div>
    );
};

export default Feature;