import './HighlightColumns.css';
export const HighlightColumns = () => {
  return (
    <div className="HighlightColumns grid grid-cols-3 justify-items-center">
      <div className="p-8">
        <h2 className="text-4xl">Get Recognised</h2>
        <p>
          These days it's hard to stand out. With this certification you will
          have no problems.
        </p>
      </div>
      <div className="p-8">
        <h2 className="text-4xl">Priority Access</h2>
        <p>
          Get access to the experts right away. We are here to help you deliver
          value.
        </p>
      </div>
      <div className="p-8">
        <h2 className="text-4xl">Extra sales</h2>
        <p>
          Sometimes we will need our partners to help us deliver something for a
          customer. Being certified means you may be given work.
        </p>
      </div>
    </div>
  );
};
