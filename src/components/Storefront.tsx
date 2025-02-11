function Storefront() {

    return (
        <div className="col-content">
          {isLoading && (
            <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-white">
              <div className="flex h-[100px] min-w-[200px] flex-col items-center justify-center gap-2 rounded-sm bg-background-color p-4 opacity-100">
                <Image src={spinner} alt="Loading" width={24} height={24} />
                <div>
                  <span>{loadingText}</span>
                </div>
              </div>
            </div>
          )}
          <div className="col-span-full lg:col-start-4 lg:col-end-9 lg:pb-24 lg:pt-12">
            <div className="zk-titles-poppins text-xl font-bold base:text-[32px] md:text-3xl">
              Mint Single NFT
            </div>
            <div className="flex w-full flex-col gap-4">
              {storeFrontCampaignDetails && (
                <>
                  <p>You can now mint NFTs with no gas fees</p>
                  <p>
                    read more here:{" "}
                    <a
                      href="https://medium.com/@zkmarkets/introducing-zkmarkets-showcase-d1259e3c1890"
                      target="_blank"
                      className="text-blue-600"
                      rel="noreferrer"
                    >
                      zkMarkets x Zyfi paymaster campaign
                    </a>
                  </p>
                </>
              )}

              <div>
                Upload Media <span className="text-xl text-red-accent">*</span>
                <div className="flex items-center gap-2 text-sm2 text-primary-grey">
                  <div>View Supported Files</div>
                  <span className="relative cursor-pointer">
                    <Image
                      src={arrowDown}
                      height={12}
                      width={12}
                      alt="arrowIconZk"
                      style={{
                        transform: arrow ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s ease-in-out",
                      }}
                      onClick={handleArrow}
                    />
                    <div
                      className="absolute mt-2 w-[95px] rounded-sm border border-dotted border-grey-border-color bg-background-color p-2 text-sm"
                      style={{ display: arrow ? "block" : "none" }}
                    >
                      {/* jpeg, png */}
                      {supportedFileTypes.map((fileType, index) => (
                        <span key={index}>
                          {fileType.split("/")[1]}
                          {index === supportedFileTypes.length - 1 ? "" : ", "}
                        </span>
                      ))}
                    </div>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="w-[300px]">
                  <input
                    type="file"
                    hidden
                    value={""}
                    ref={fileInputRef} // Use the ref here
                    onChange={handleFileChange}
                  />
                  <div className="background-cover flex h-[200px] w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded rounded-sm border border-2 border-2 border-dashed border-dotted border-grey-border-color base:h-[300px] base:w-[300px]">
                    {selectedImage ? (
                      <img src={selectedImage} alt="" className="h-full w-full object-contain" />
                    ) : (
                      <span>Select Image</span>
                    )}
                  </div>
                </label>
                {/* <div className="flex max-w-[300px] justify-between">
                <button
                  onClick={() => {
                    if (uploaded) {
                      copyToClip();
                    } else {
                      handleImageUpload();
                    }
                  }}
                  disabled={!selectedImage || uploading}
                  style={{ opacity: uploading ? ".5" : "1" }}
                  className={`${selectedImage ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-50"} ${uploaded ? "bg-primary-blue" : "bg-primary-red"} p-3 w-32 text-center rounded text-white rounded-sm`}
                >
                  {uploaded ? "Copy Link" : uploading ? "Uploading.." : "Upload"}
                </button>
              </div> */}
              </div>
            </div>

            <div
              className={`${
                uploaded && ipfsLink !== ""
                  ? "opacity-100"
                  : "pointer-events-none cursor-not-allowed opacity-50"
              } flex flex-col gap-8`}
            >
              <div className="flex flex-col gap-8">
                <div>
                  General Information <span className="text-xl text-red-accent">*</span>
                </div>
                <div className="flex w-[75%] flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className={`bg-background-color text-sm2 ${inputBgName} rounded-sm`}
                    style={inputBgName === "border-primary-red" ? { boxShadow: "none" } : {}}
                    value={name}
                    onChange={handleNameChange}
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className={`bg-background-color text-sm2 ${inputBgDesc} rounded-sm`}
                    style={inputBgDesc === "border-primary-red" ? { boxShadow: "none" } : {}}
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                  {/* <Tooltip title="Please enter a URL" placement="top-start">                </Tooltip> */}
                  {/* <input type="text" disabled placeholder="External Link" 
                  className={`text-sm2 bg-background-color ${inputBgLink} rounded-sm text-primary-grey`}
                  style={inputBgLink === "border-primary-red" ? { boxShadow: "none" } : {}} value={externalLink} onChange={handleExternalLinkChange}/> */}
                </div>
              </div>

              <div className="flex w-full flex-col gap-8">
                <div className="flex w-full flex-col gap-4">
                  <div>
                    Attributes <span className="text-sm2 text-primary-grey"> (optional)</span>
                  </div>
                  <div className="text-sm2 text-primary-grey">
                    Attributes help increase engagement and attract more viewers
                  </div>
                </div>
                <div className="flex max-h-[300px] w-full flex-col gap-4 overflow-y-auto p-2">
                  {attrCount === 0 ? (
                    <div className="text-sm2 text-primary-grey">Nothing here...</div>
                  ) : (
                    attributes.map((attr, index) => (
                      <div className="flex w-full items-center gap-4" key={index}>
                        <input
                          type="text"
                          placeholder="eg. Eyes"
                          className="flex-grow rounded-sm border-grey-border-color bg-background-color text-sm2"
                          value={attr.trait_type}
                          onChange={(e) => handleAttrTypeChange(index, e)}
                        />
                        <input
                          type="text"
                          placeholder="eg. Sunglasses"
                          className="flex-grow rounded-sm border-grey-border-color bg-background-color text-sm2"
                          value={attr.value}
                          onChange={(e) => handleAttrValueChange(index, e)}
                        />
                        <div
                          className="text-base text-primary-grey hover:cursor-pointer"
                          onClick={() => handleSubDiv(index)}
                        >
                          ╳
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div
                  className="w-[40px] rounded-[99px] bg-grey-border-color p-2 text-center text-base text-white hover:cursor-pointer"
                  onClick={handleAddDiv}
                >
                  +
                </div>
              </div>
              <div className="flex w-full justify-center">
                <button
                  onClick={handleMint}
                  className="w-[100px] rounded-sm bg-primary-blue p-2 text-center text-white"
                >
                  Mint
                </button>
              </div>
            </div>
          </div>
        </div>
    )

}

export default Storefront()