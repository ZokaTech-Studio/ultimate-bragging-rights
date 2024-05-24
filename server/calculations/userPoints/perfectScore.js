// exports.perfectScore = () => {
//if both scores are correctly then return
//v_ml_points+h_ml_points
// };
exports.perfectScore = (
  v_score,
  h_score,
  predicted_v_score,
  predicted_h_score,
  v_ml_points,
  h_ml_points
) => {
  if (v_score === predicted_v_score && h_score === predicted_h_score) {
    return v_ml_points + h_ml_points;
  }
};
