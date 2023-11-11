export default function RequiredAsterisk({ isOptional = true }) {
  return (
    <>
      {!isOptional && (
        <span className='text-red-500' data-testid='required-asterisk'>
          *
        </span>
      )}
    </>
  );
}
