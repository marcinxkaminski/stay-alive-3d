import { MeshStandardMaterial, SphereGeometry, Mesh } from 'three';
import { distortGeometry } from '../utils/geometry';

export default () => {
  // TODO: move to constants
  const maxVertexHeight = 0.03;
  const color = 0xf0f0f0;
  const radius = 0.37;
  const widthSegments = 7;
  const heightSegments = 6;

  const material = new MeshStandardMaterial({
    color,
    flatShading: true,
  });

  const rockGeometry = new SphereGeometry(
    radius,
    widthSegments,
    heightSegments,
  );

  distortGeometry(rockGeometry, maxVertexHeight);

  const rock = new Mesh(rockGeometry, material);
  rock.castShadow = true;
  rock.receiveShadow = true;

  return rock;
};