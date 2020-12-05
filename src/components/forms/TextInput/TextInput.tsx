import { FieldRenderProps } from 'react-final-form';

type Props = FieldRenderProps<string, any>;

export const TextInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <input
    className="text-md block px-3 py-2 rounded-lg w-full
  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
    type="text"
    {...input}
    {...rest}
  />
);
