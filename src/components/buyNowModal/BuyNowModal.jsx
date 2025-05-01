/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-gray-100 bg-violet-600 border border-transparent hover:border-violet-500 hover:text-violet-700 hover:bg-violet-100 rounded-xl"
      >
        Buy now
      </Button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleOpen}
          ></div>

          {/* Modal Box */}
          <div className="relative bg-violet-50 rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto shadow-lg z-10">
            <h2 className="text-xl font-semibold text-violet-700 mb-4 text-center">
              Enter your details
            </h2>

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={addressInfo.name}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, name: e.target.value })
                }
                placeholder="Enter your name"
                className="bg-violet-50 border border-violet-200 px-3 py-2 w-full rounded-md outline-none text-violet-600 placeholder-violet-500"
              />

              <input
                type="text"
                name="address"
                value={addressInfo.address}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, address: e.target.value })
                }
                placeholder="Enter your address"
                className="bg-violet-50 border border-violet-200 px-3 py-2 w-full rounded-md outline-none text-violet-600 placeholder-violet-500"
              />

              <input
                type="number"
                name="pincode"
                value={addressInfo.pincode}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, pincode: e.target.value })
                }
                placeholder="Enter your pincode"
                className="bg-violet-50 border border-violet-200 px-3 py-2 w-full rounded-md outline-none text-violet-600 placeholder-violet-500"
              />

              <input
                type="text"
                name="mobileNumber"
                value={addressInfo.mobileNumber}
                onChange={(e) =>
                  setAddressInfo({
                    ...addressInfo,
                    mobileNumber: e.target.value,
                  })
                }
                placeholder="Enter your mobile number"
                className="bg-violet-50 border border-violet-200 px-3 py-2 w-full rounded-md outline-none text-violet-600 placeholder-violet-500"
              />

              <Button
                type="button"
                onClick={() => {
                  buyNowFunction();
                  handleOpen();
                }}
                className="w-full px-4 py-3 text-center text-gray-100 bg-violet-600 border border-transparent rounded-lg"
              >
                Confirm Purchase
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyNowModal;
