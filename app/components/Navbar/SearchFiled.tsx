const SearchFiled = ({ handleClose }: { handleClose: any }) => {
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity"></div>

      <div class="fixed inset-0 z-10 w-full overflow-y-auto">
        <div class="px-3 mt-6">
          <form>
            <input
              type="search"
              name="search"
              className="w-full py-3 px-3 relative"
              placeholder="Search here..."
            />
            <button
              type="button"
              onClick={handleClose}
              className="absolute bg-orange-500 right-[12px] py-[10px] px-3  text-xl font-bold"
            >
              X
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchFiled;
