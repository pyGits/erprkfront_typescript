import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showLoader } from "../../Store/Actions/application";

interface CardProps {
  header: any;
  children: any;
  title: string;
  loading?: boolean;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      {props.header}
      <div className="card-body">
        <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
          <div className="row">
            <div className="col-sm-12 col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-sm-12"></div>
          </div>
          <div className="row">{props.children}</div>
        </div>
      </div>

      {props.loading && (
        <div className="overlay">
          <i className="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  loading: state.application.loading,
});
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ showLoader }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);
