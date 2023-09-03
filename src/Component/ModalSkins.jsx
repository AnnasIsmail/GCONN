import { Icon as Iconify } from "@iconify/react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Accordion, Card, Icon, Image, Label, Modal } from "semantic-ui-react";
import styled from "styled-components";
import SkinHome from "./SkinHome";

const colorBackground = "rgb(0, 7, 41)";
const ContainerOtherSkins = styled.div`
  background: linear-gradient(
    18deg,
    rgba(28, 52, 173, 0.23012955182072825) 0%,
    rgba(28, 52, 173, 1) 100%
  );
  border-radius: 10px;

  .ui.card {
    margin: 0px;
  }
`;
const OtherSkins = styled.div`
  display: flex;
  max-width: 100%;
  overflow: auto;
  margin: 8px;
  margin-bottom: 0px;
  padding-bottom: 8px;
  gap: 8px;
`;

export default function ModalSkins({
  open,
  name,
  image,
  chromas,
  setOpen,
  otherSkins,
  nameWeapon,
  category,
  levels,
  shop,
  stats,
}) {
  const formattedStats = Object.keys(stats?.adsStats ? stats.adsStats : {}).map(
    (key) => ({
      label: key.replace(/([A-Z])/g, " $1"),
      value: stats.adsStats[key],
    })
  );
  console.log(stats);
  const [isOpen, setIsOpen] = useState(open);
  const closeModal = () => {
    setIsOpen(false);
    setOpen(false);
  };

  const [activeLevel, setActiveLevel] = useState(-1);
  const [activeVariant, setActiveVariant] = useState(-1);

  const handleLevelClick = (levelIndex) => {
    const newLevelIndex = activeLevel === levelIndex ? -1 : levelIndex;
    setActiveLevel(newLevelIndex);
  };

  const handleVariantClick = (variantIndex) => {
    const newVariantIndex = activeVariant === variantIndex ? -1 : variantIndex;
    setActiveVariant(newVariantIndex);
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Modal
      open={isOpen}
      style={{
        top: "auto",
        left: "auto",
        height: "auto",
      }}
      onClose={closeModal}
      dimmer="blurring"
    >
      <Modal.Header
        style={{
          backgroundColor: colorBackground,
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        {name}
        <Icon link name="close" onClick={closeModal} />
      </Modal.Header>
      <Modal.Content
        style={{
          backgroundColor: colorBackground,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-evenly",
        }}
      >
        <Image
          size="medium"
          src={image ? image : chromas[0].displayIcon}
          wrapped
        />
        <Modal.Description
          style={{
            width: "100%",
            padding: 0,
          }}
        >
          <h4 style={{ fontWeight: "bold" }}>Variants</h4>
          <Accordion
            styled
            style={{
              backgroundColor: colorBackground,
              border: "1px solid rgba(255, 255, 255, 0.7)",
            }}
          >
            {chromas.map((data, index) => (
              <div key={index}>
                <Accordion.Title
                  active={activeVariant === index}
                  onClick={() => handleVariantClick(index)}
                  style={{
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: "3px",
                  }}
                >
                  <Icon name="dropdown" />
                  {data.displayName}
                </Accordion.Title>
                <Accordion.Content
                  active={activeVariant === index}
                  style={{
                    padding: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      size="medium"
                      src={
                        data.displayIcon ? data.displayIcon : data.fullRender
                      }
                      wrapped
                    />
                  </div>
                </Accordion.Content>
              </div>
            ))}
          </Accordion>
          <h4 style={{ fontWeight: "bold", margin: "10px 0" }}>Levels</h4>
          <Accordion
            styled
            style={{
              backgroundColor: colorBackground,
              border: "1px solid rgba(255, 255, 255, 0.7)",
            }}
          >
            {levels.map((data, index) => (
              <div key={index}>
                <Accordion.Title
                  active={activeLevel === index}
                  onClick={() => handleLevelClick(index)}
                  style={{
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: "3px",
                  }}
                >
                  <Icon name="dropdown" />
                  {data.displayName}
                </Accordion.Title>
                <Accordion.Content
                  active={activeLevel === index}
                  style={{
                    padding: "15px",
                  }}
                >
                  {data.streamedVideo ? (
                    <ReactPlayer
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        background: "none",
                      }}
                      controls
                      height="auto"
                      url={data.streamedVideo}
                    />
                  ) : (
                    "No Video"
                  )}
                </Accordion.Content>
              </div>
            ))}
          </Accordion>
        </Modal.Description>
        <Modal.Description
          style={{
            width: "100%",
            gridColumn: "1 / span 2",
          }}
        >
          <h4
            style={{
              padding: "10px",
              paddingLeft: 0,
            }}
          >
            {nameWeapon}
            <Label
              color="red"
              style={{
                padding: "4px 6px",
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              {category}
            </Label>
          </h4>
          <div
            style={{
              width: "100%",
              display: "grid",
              justifyContent: "space-evenly",
              gridTemplateColumns: "300px 1fr",
            }}
          >
            <Card
              style={{
                backgroundColor: colorBackground,
                color: "white",
                margin: 0,
              }}
            >
              <h5
                style={{
                  padding: "10px 0 0 10px ",
                }}
              >
                Shop
              </h5>
              <Image
                src={shop?.newImage}
                wrapped
                ui={false}
                style={{
                  padding: "10px",
                }}
              />
              <Card.Content>
                <Card.Header style={{ color: "white", fontWeight: "bold" }}>
                  {nameWeapon}
                </Card.Header>
                <Card.Meta>
                  <span style={{ color: "white", opacity: 0.7 }}>
                    {shop?.categoryText}
                  </span>
                </Card.Meta>
                <Card.Description
                  style={{
                    color: "white",
                    display: "flex",
                    fontSize: "20px",
                  }}
                >
                  <Iconify icon="healthicons:dollar" height={25} />
                  {shop?.cost}
                </Card.Description>
              </Card.Content>
            </Card>
            {stats && (
              <Card
                style={{
                  backgroundColor: colorBackground,
                  color: "white",
                  margin: 0,
                  width: "100%",
                }}
              >
                <h5
                  style={{
                    margin: 0,
                    padding: "10px 0 0 10px ",
                  }}
                >
                  Stats
                </h5>
                <Card.Content>
                  <Card.Description
                    style={{
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    <ul>
                      {stats?.adsStats && (
                        <li>
                          ADS Stats:
                          {stats?.formattedStats?.map((stat, index) => (
                            <ul key={index}>
                              <li>
                                {stat.label}: {stat.value}
                              </li>
                            </ul>
                          ))}
                        </li>
                      )}

                      {stats?.airBurstStats && (
                        <li>
                          Air Burst Stats:
                          <ul>
                            <li>
                              Burst Distance:{" "}
                              {stats.airBurstStats.burstDistance}
                            </li>
                            <li>
                              Shotgun Pellet Count:{" "}
                              {stats.airBurstStats.shotgunPelletCount}
                            </li>
                          </ul>
                        </li>
                      )}
                      {stats?.altFireType && (
                        <li>Alt Fire Type: {stats?.altFireType}</li>
                      )}
                      {stats?.altShotgunStats && (
                        <li>Alt Shotgun Stats: {stats?.altShotgunStats}</li>
                      )}
                      <li>
                        Damage Ranges:
                        <ul>
                          {stats?.damageRanges?.map((damageRange, index) => (
                            <li key={index}>
                              Range {index + 1}:
                              <ul>
                                <li>Body Damage: {damageRange.bodyDamage}</li>
                                <li>Head Damage: {damageRange.headDamage}</li>
                                <li>Leg Damage: {damageRange.legDamage}</li>
                                <li>
                                  Range Start Meters:{" "}
                                  {damageRange.rangeStartMeters}
                                </li>
                                <li>
                                  Range End Meters: {damageRange.rangeEndMeters}
                                </li>
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </li>
                      {stats?.equipTimeSeconds && (
                        <li>Equip Time (Seconds): {stats.equipTimeSeconds}</li>
                      )}
                      {stats?.feature && <li>Feature: {stats.feature}</li>}
                      {stats?.fireMode && <li>Fire Mode: {stats.fireMode}</li>}
                      {stats?.fireRate && <li>Fire Rate: {stats.fireRate}</li>}
                      {stats?.firstBulletAccuracy && (
                        <li>
                          First Bullet Accuracy: {stats.firstBulletAccuracy}
                        </li>
                      )}
                      {stats?.magazineSize && (
                        <li>Magazine Size: {stats.magazineSize}</li>
                      )}
                      {stats?.reloadTimeSeconds && (
                        <li>
                          Reload Time (Seconds): {stats.reloadTimeSeconds}
                        </li>
                      )}
                      {stats?.runSpeedMultiplier && (
                        <li>
                          Run Speed Multiplier: {stats.runSpeedMultiplier}
                        </li>
                      )}
                      {stats?.shotgunPelletCount && (
                        <li>
                          Shotgun Pellet Count: {stats.shotgunPelletCount}
                        </li>
                      )}
                      {stats?.wallPenetration && (
                        <li>Wall Penetration: {stats.wallPenetration}</li>
                      )}
                    </ul>
                  </Card.Description>
                </Card.Content>
              </Card>
            )}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions
        style={{
          textAlign: "start",

          backgroundColor: colorBackground,
        }}
      >
        <ContainerOtherSkins>
          <h5
            style={{
              margin: 0,
              paddingLeft: "10px",
              paddingTop: "10px",
            }}
          >
            Other Skins
          </h5>
          <OtherSkins>
            {otherSkins?.map((data, index) => (
              <SkinHome
                key={index}
                image={data?.displayIcon}
                title={data?.displayName}
                levels={data?.levels}
                chromas={data?.chromas}
                assetPath={data?.assetPath}
                uuidWeapons={data?.uuidWeapons}
              />
            ))}
          </OtherSkins>
        </ContainerOtherSkins>
      </Modal.Actions>
    </Modal>
  );
}
