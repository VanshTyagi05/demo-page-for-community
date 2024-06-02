import React from 'react'

export default function About() {
  return (
      <div className="py-16 ">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/10646599/pexels-photo-10646599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Joining Hands For Rising Heads!
                      </h2>
                      <p className="mt-6 text-gray-600">
                      This platform allow a person to request  the loan for a particular time period. Now the other community members will join hands to contribute for loan requested by the person. The interest given by the borrower will be distributed equally among the community members who had contributed for the loan.

                      </p>
                      <p className="mt-4 text-gray-600">
                      The motive behind this project is to create a platform where people from same organization will join together to make a community who support each other financially.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}