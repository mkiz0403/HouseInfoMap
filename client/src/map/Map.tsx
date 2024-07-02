import { useEffect, useRef } from "react";
import { HouseInfo, HouseInfo2 } from "../interFace";
import fstfive from "../../public/fastfive.png";

declare global {
  interface Window {
    naver: any;
  }
}

interface MapProps {
  places: HouseInfo[];
  places2: HouseInfo2[];
  selectedAddress: string | null;
}

function HouseMap({ places, places2, selectedAddress }: MapProps) {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const { naver } = window;

    if (!naver) return;

    const initMap = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const mapOptions = {
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 16,
            zoomControl: true,
            zoomControlOptions: {
              style: naver.maps.ZoomControlStyle.LARGE,
              position: naver.maps.Position.TOP_RIGHT,
            },
          };

          const map = new naver.maps.Map(mapRef.current, mapOptions);

          new naver.maps.Marker({
            // position: new naver.maps.LatLng(latitude, longitude),
            position: new naver.maps.LatLng(37.4964496, 127.0297105),
            map: map,
            icon: {
              content:
                '<div style="background-color: green; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; text-align: center;"></div>',
              anchor: new naver.maps.Point(12, 12),
            },
          });

          places.forEach((place) => {
            naver.maps.Service.geocode(
              {
                query: place.주소,
              },
              function (status: any, response: any) {
                if (status !== naver.maps.Service.Status.OK) {
                  return alert("Something went wrong!");
                }
                const location = response.v2.addresses[0];
                const latlng = new naver.maps.LatLng(location.y, location.x);

                const marker = new naver.maps.Marker({
                  position: latlng,
                  map: map,
                  title: place.주택군이름,
                  icon: {
                    content:
                      '<div style="background-color: blue; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white;"></div>',
                    anchor: new naver.maps.Point(12, 12),
                  },
                });
                const infoWindow = new naver.maps.InfoWindow({
                  content: [
                    '<div style="padding: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;">',
                    `   <h3 style="font-weight: bold; margin-bottom: 5px;"> 주택명 : ${place.주택군이름}</h3>`,
                    `   <div style="font-weight: bold; margin-bottom: 5px;"> 주소 : ${place.주소}</div>`,
                    `   <div style="font-size: 13px;">전용면적 : ${place.전용면적}<div>`,
                    `   <div style="font-size: 13px;">주거공용면적: ${place.주거공용면적}<div>`,
                    `   <div style="font-size: 13px;">방수: ${place.방수}<div>`,
                    `   <div style="font-size: 13px;">임대보증금: ${place.임대보증금}<div>`,
                    `   <div style="font-size: 13px;">월임대료: ${place.월임대료}<div>`,
                    `   <div style="font-size: 13px;">임대보증금1: ${place.임대보증금_1}<div>`,
                    `   <div style="font-size: 13px;">월임대료1: ${place.월임대료_1}<div>`,
                    `   <div style="font-size: 13px;">임대보증금2: ${place.임대보증금_2}<div>`,
                    `   <div style="font-size: 13px;">월임대료2: ${place.월임대료_2}<div>`,
                    `   <div style="font-size: 13px;">임대보증금3: ${place.임대보증금_3}<div>`,
                    `   <div style="font-size: 13px;">월임대료3: ${place.월임대료_3}<div>`,
                    "</div>",
                  ].join(""),
                  maxWidth: 300,
                  anchorSize: {
                    width: 12,
                    height: 14,
                  },
                  borderColor: "#cecdc7",
                });

                naver.maps.Event.addListener(marker, "click", () => {
                  if (infoWindow.getMap()) {
                    infoWindow.close();
                  } else {
                    infoWindow.open(map, marker);
                  }
                });
              }
            );
          });

          places2.forEach((place) => {
            naver.maps.Service.geocode(
              {
                query: place.주소,
              },
              function (status: any, response: any) {
                if (status !== naver.maps.Service.Status.OK) {
                  return alert("Something went wrong!");
                }
                const location = response.v2.addresses[0];
                const latlng = new naver.maps.LatLng(location.y, location.x);

                const marker = new naver.maps.Marker({
                  position: latlng,
                  map: map,
                  title: place.주택군이름,
                  icon: {
                    content:
                      '<div style="background-color: red; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white;"></div>',
                    anchor: new naver.maps.Point(12, 12),
                  },
                });
                const infoWindow = new naver.maps.InfoWindow({
                  content: [
                    '<div style="padding: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;">',
                    `   <h3 style="font-weight: bold; margin-bottom: 5px;"> 주택명 : ${place.주택군이름}</h3>`,
                    `   <div style="font-weight: bold; margin-bottom: 5px;"> 주소 : ${place.주소}</div>`,
                    `   <div style="font-size: 13px;">전용면적 : ${place.전용면적}<div>`,
                    `   <div style="font-size: 13px;">주거공용면적: ${place.주거공용면적}<div>`,
                    `   <div style="font-size: 13px;">방수: ${place.방수}<div>`,
                    `   <div style="font-size: 13px;">임대보증금: ${place.임대보증금}<div>`,
                    `   <div style="font-size: 13px;">월임대료: ${place.월임대료}<div>`,
                    `   <div style="font-size: 13px;">임대보증금1: ${place.임대보증금_1}<div>`,
                    `   <div style="font-size: 13px;">월임대료1: ${place.월임대료_1}<div>`,
                    `   <div style="font-size: 13px;">임대보증금2: ${place.임대보증금_2}<div>`,
                    `   <div style="font-size: 13px;">월임대료2: ${place.월임대료_2}<div>`,
                    `   <div style="font-size: 13px;">임대보증금3: ${place.임대보증금_3}<div>`,
                    `   <div style="font-size: 13px;">월임대료3: ${place.월임대료_3}<div>`,
                    "</div>",
                  ].join(""),
                  maxWidth: 300,
                  anchorSize: {
                    width: 12,
                    height: 14,
                  },
                  borderColor: "#cecdc7",
                });

                naver.maps.Event.addListener(marker, "click", () => {
                  if (infoWindow.getMap()) {
                    infoWindow.close();
                  } else {
                    infoWindow.open(map, marker);
                  }
                });
              }
            );
          });

          if (selectedAddress) {
            const selectedPlace = places.find(
              (place) => place.주소 === selectedAddress
            );
            const selectedTitle = selectedPlace
              ? selectedPlace.주택군이름
              : "정보 없음";
            const selectedReview = selectedPlace
              ? selectedPlace.전용면적
              : "정보 없음";

            naver.maps.Service.geocode(
              {
                query: selectedAddress,
              },
              function (status: any, response: any) {
                if (status !== naver.maps.Service.Status.OK) {
                  return alert("Something went wrong!");
                }
                const location = response.v2.addresses[0];
                const latlng = new naver.maps.LatLng(location.y, location.x);

                const marker = new naver.maps.Marker({
                  position: latlng,
                  map: map,
                });
                const infoWindow = new naver.maps.InfoWindow({
                  content: [
                    '<div style="padding: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;">',
                    `   <div style="font-weight: bold; margin-bottom: 5px;">${selectedTitle}</div>`,
                    `   <div style="font-size: 13px;">${selectedReview}<div>`,
                    "</div>",
                  ].join(""),
                  maxWidth: 300,
                  anchorSize: {
                    width: 12,
                    height: 14,
                  },
                  borderColor: "#cecdc7",
                });

                naver.maps.Event.addListener(marker, "click", () => {
                  if (infoWindow.getMap()) {
                    infoWindow.close();
                  } else {
                    infoWindow.open(map, marker);
                  }
                });

                map.setCenter(latlng);
              }
            );
          }
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    };
    initMap();
  }, [places, selectedAddress]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "1100px",
        display: "flex",
        marginTop: "5px",
        marginLeft: "10px",
      }}
    ></div>
  );
}
export default HouseMap;
