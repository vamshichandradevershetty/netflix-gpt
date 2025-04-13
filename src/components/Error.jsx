const Error = ()=>{
    return (
        <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-red-500">Oops! 😬</h1>
      <p>Something went wrong. Please try again later.</p>
      <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Reload
      </button>

        </div>
    );
}
export default Error;