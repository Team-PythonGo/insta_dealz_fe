import { Input } from 'semantic-ui-react';

const SearchComponent = (props) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search..."
        onChange={props.handleChange}
        value={props.search}
      />
    </div>
  );
};

export default SearchComponent;
