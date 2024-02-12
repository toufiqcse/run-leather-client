const ForgotPassword = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center my-5">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Forgot Password
        </h2>

        <form>
          <div className="mb-4">
            <label
              for="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-sm py-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-sm mt-4 text-center text-gray-600">
          Remember your password?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
