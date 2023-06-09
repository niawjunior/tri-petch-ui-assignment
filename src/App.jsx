import { useMediaQuery } from "react-responsive";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(min-width: 320px)",
  });

  return (
    <>
      <div className="desktop:mt-[24px] tablet:mt-[80px] flex flex-col bg-white">
        <div className="relative">
          <div className="desktop:flex tablet:hidden mobile:hidden footballer-desktop-position">
            <img className="max-w-[550px]" src="footballer1.svg" />
          </div>
          <div className="desktop:hidden tablet:flex mobile:hidden footballer-tablet-position">
            <img className="max-w-[498px]" src="footballer2.svg" />
          </div>
          <div className="desktop:hidden tablet:hidden mobile:block footballer-mobile-position">
            <img className="max-w-[200px]" src="footballer3.svg" />
          </div>
          {!isDesktop && !isTablet && isMobile && (
            <>
              <div className="section-1">
                <div className="w-[100%] pl-[19px]">
                  <div className="title text-[50px]">ATHLETS</div>
                </div>
              </div>

              <div className="section-2 mt-[200px]">
                <div className="w-[100%] pl-[19px] mt-[70px] h-[230px]">
                  <Carousel showArrows={false} showStatus={false}>
                    <div>
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="text-black text-[18px]">01</div>
                          <div className="purple-underline"></div>
                        </div>
                        <div className="text-[28px] text-header">
                          CONNECTION
                        </div>
                      </div>
                      <div className="text-header-detail text-left">
                        Connect with coaches directly, you can ping coaches to
                        view profile.
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="text-black text-[18px]">02</div>
                          <div className="purple-underline"></div>
                        </div>
                        <div className="text-[28px] text-header">
                          COLLABORATION
                        </div>
                      </div>
                      <div className="text-header-detail text-left">
                        Work with other student athletes to increase visability.
                        When you share and like other players videos it will
                        increase your visability as a player. This is the team
                        work aspect to Surface 1.
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="text-black text-[18px]">03</div>
                          <div className="purple-underline"></div>
                        </div>
                        <div className="text-[28px] text-header">GROWTH</div>
                      </div>
                      <div className="text-header-detail text-left">
                        Resources and tools for you to get better as a student
                        Athelte. Access to training classes, tutor sessions, etc
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </>
          )}
          {(isDesktop || isTablet) && (
            <>
              <div className="section-1">
                <div className="desktop:w-1/2 tablet:w-[60%] w-[60%] desktop:pl-0 tablet:pl-0">
                  <div className="title desktop:text-[90px] tablet:text-[90px]">
                    ATHLETS
                  </div>

                  <div className="flex items-center desktop:mt-[59px] tablet:mt-[49px]">
                    <div className="flex flex-col">
                      <div className="text-black text-[18px]">01</div>
                      <div className="purple-underline"></div>
                    </div>
                    <div className="desktop:text-[36px] laptop:text-[36px] text-header">
                      CONNECTION
                    </div>
                  </div>
                  <div className="text-header-detail desktop:text-[20px] tablet:text-[18px] tablet:w-[90%]">
                    Connect with coaches directly, you can ping coaches to view
                    profile.
                  </div>
                </div>
              </div>
              <div className="section-2 desktop:mt-[0px] tablet:mt-[0px]">
                <div className="desktop:w-1/2 tablet:w-[60%] w-[60%] desktop:mt-[30px] tablet:mt-[30px] desktop:pl-0 tablet:pl-0">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="text-black text-[18px]">02</div>
                      <div className="purple-underline"></div>
                    </div>
                    <div className="desktop:text-[36px] laptop:text-[36px] text-header">
                      COLLABORATION
                    </div>
                  </div>
                  <div className="text-header-detail desktop:text-[20px] tablet:text-[18px] tablet:w-[90%]">
                    Work with other student athletes to increase visability.
                    When you share and like other players videos it will
                    increase your visability as a player. This is the team work
                    aspect to Surface 1.
                  </div>
                </div>
              </div>

              <div className="section-3">
                <div className="desktop:w-1/2 tablet:w-[60%] w-[60%] mt-[30px] desktop:pl-0 tablet:pl-0">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="text-black text-[18px]">03</div>
                      <div className="white-underline"></div>
                    </div>
                    <div className="desktop:text-[36px] laptop:text-[36px] text-header">
                      GROWTH
                    </div>
                  </div>
                  <div className="text-header-detail desktop:text-[20px] tablet:text-[18px] text-white tablet:w-[90%]">
                    Resources and tools for you to get better as a student
                    Athelte. Access to training classes, tutor sessions, etc
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="relative">
          <div className="desktop:block tablet:hidden mobile:hidden  player-desktop-position">
            <img className="desktop:max-w-[550px]" src="player.svg" />
          </div>
          <div className="desktop:hidden tablet:block mobile:hidden player-labtop-position">
            <img className="max-w-[300px]" src="player2.svg" />
          </div>
          <div className="desktop:hidden tablet:hidden mobile:block player-mobile-position">
            <img src="player3.svg" />
          </div>

          {!isDesktop && !isTablet && isMobile && (
            <>
              <div className="section-1">
                <div className="w-[100%] pl-[19px]">
                  <div className="title text-[50px]">PLAYERS</div>
                </div>
              </div>

              <div className="section-2 mt-[200px]">
                <div className="w-[100%] pl-[19px] mt-[70px] h-[230px]">
                  <Carousel showArrows={false} showStatus={false}>
                    <div>
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="text-black text-[18px]">01</div>
                          <div className="purple-underline"></div>
                        </div>
                        <div className="text-[28px] text-header">
                          CONNECTION
                        </div>
                      </div>
                      <div className="text-header-detail text-left">
                        Connect with talented athlete directly, you can watch
                        their skills through video showreels directly from
                        Surface 1.
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="text-black text-[18px]">02</div>
                          <div className="purple-underline"></div>
                        </div>
                        <div className="text-[28px] text-header">
                          COLLABORATION
                        </div>
                      </div>
                      <div className="text-header-detail text-left">
                        Work with recruiter to increase your chances of
                        findingtalented athlete.
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="text-black text-[18px]">03</div>
                          <div className="purple-underline"></div>
                        </div>
                        <div className="text-[28px] text-header">GROWTH</div>
                      </div>
                      <div className="text-header-detail text-left">
                        Save your time, recruit proper athlets for your team.
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </>
          )}

          {(isDesktop || isTablet) && (
            <>
              <div className="section-4">
                <div className="desktop:w-1/2 w-[80%] desktop:pl-[15%] desktop:mt-[20px] tablet:pt-[20px] tablet:pl-[30px]  mobile:pl-[19px]">
                  <div className="desktop:text-[90px] tablet:text-[90px] labtop:pl-[0px] desktop:pl-[0px] title">
                    PLAYERS
                  </div>
                  <div className="flex items-center desktop:mt-[34px] tablet:mt-[34px]">
                    <div className="flex flex-col">
                      <div className="text-black text-[18px]">01</div>
                      <div className="purple-underline"></div>
                    </div>
                    <div className="desktop:text-[36px] laptop:text-[36px] text-header">
                      CONNECTION
                    </div>
                  </div>
                  <div className="text-header-detail desktop:text-[20px] tablet:text-[18px] w-[80%]">
                    Connect with talented athlete directly, you can watch their
                    skills through video showreels directly from Surface 1.
                  </div>
                </div>
              </div>
              <div className="section-5">
                <div className="desktop:w-1/2 w-[80%] desktop:pl-[15%] pt-[30px] tablet:pl-[30px]">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="text-black text-[18px]">02</div>
                      <div className="purple-underline"></div>
                    </div>
                    <div className="desktop:text-[36px] laptop:text-[36px] text-header">
                      COLLABORATION
                    </div>
                  </div>
                  <div className="text-header-detail desktop:text-[20px] tablet:text-[18px]">
                    Work with recruiter to increase your chances of finding
                    talented athlete.
                  </div>
                </div>
              </div>
              <div className="section-6">
                <div className="desktop:w-1/2 w-[80%] desktop:pl-[15%] pt-[30px] tablet:pl-[30px]">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="text-[#8765DD] text-[18px]">03</div>
                      <div className="white-underline"></div>
                    </div>
                    <div className="desktop:text-[36px] laptop:text-[36px] mobile:text-[28px] text-header">
                      GROWTH
                    </div>
                  </div>
                  <div className="text-white text-header-detail desktop:text-[20px] tablet:text-[18px]">
                    Save your time, recruit proper athlets for your team.
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
