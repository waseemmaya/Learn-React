
import React, { Component } from 'react';

class GitIssue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [{
                isFavt: true,
                title: 'Issue 1',
                comment: 4,
                isOpen: true,
                date: "Fri Sep 14 2018"
            },
            {
                isFavt: false,
                title: 'Issue 2',
                comment: 4,
                isOpen: false,
                date: "Sat Sep 18 2018"
            },
            {
                isFavt: false,
                title: 'Issue 3',
                comment: 2,
                isOpen: true,
                date: "Fri Nov 1 2018"
            },
            {
                isFavt: false,
                title: 'Issue 4',
                comment: 6,
                isOpen: false,
                date: "Sun Sep 4 2018"
            },
            {
                isFavt: false,
                title: 'Issue 5',
                comment: 8,
                isOpen: true,
                date: "Fri Aug 14 2018"
            },
            {
                isFavt: false,
                title: 'Issue 6',
                comment: 9,
                isOpen: true,
                date: "Mon Dec 28 2018"
            },
            {
                isFavt: false,
                title: 'Issue 7',
                comment: 3,
                isOpen: false,
                date: "Fri Sep 14 2018"
            }],

            verticalLine: 'https://png.icons8.com/ios/50/000000/thick-vertical-line-filled.png',
            trueImg: 'https://png.icons8.com/color/50/000000/ok.png',
            falseImg: 'https://png.icons8.com/color/50/000000/box-important.png',
            favtImgFalse: 'https://png.icons8.com/material-outlined/50/000000/hearts.png',
            favtImgTrue: 'https://png.icons8.com/material-rounded/50/000000/hearts.png',
            msgImg: 'https://cdn.iconscout.com/icon/free/png-512/message-537-461910.png',
            imgStyle: {
                width: '20px',
                height: '20px'
            },
            imgSpan: {
                float: "right"
            }
        }
        // this.addFavt = this.addFavt.bind(this);
    }


    addFavt = i => {
        const { issues } = this.state;

        // if (issues[i].isFavt) {
        //     issues[i].isFavt = false;
        // } else {
        //     issues[i].isFavt = true;
        // }

        issues[i].isFavt ?  issues[i].isFavt = false :  issues[i].isFavt = true;

        this.setState({
            issues
        })
        


    };


    render() {
        const { issues, verticalLine, isFavt, msgImg, imgStyle, imgSpan, isOpen, trueImg, falseImg, favtImgFalse, favtImgTrue } = this.state;
        return (
            <div className="App">
                {issues.map((data, index) => {
                    return (
                        <div key={index}>
                            <h2><span>
                                {
                                    data.isOpen ?
                                        <img style={imgStyle} src={trueImg} alt='img' />
                                        :
                                        <img style={imgStyle} src={falseImg} alt='img' />
                                }

                            </span>{data.title}

                            </h2>

                            <p>{data.date}</p>
                            <p><img alt='img' src={msgImg} style={imgStyle} /> {data.comment}<img src={verticalLine} style={imgStyle} /> <span>
                                {
                                    data.isFavt ?
                                        <img style={imgStyle} onClick={this.addFavt.bind(this, index)} src={favtImgTrue} alt='img' />
                                        :
                                        <img style={imgStyle} onClick={this.addFavt.bind(this, index)} src={favtImgFalse} alt='img' />
                                }

                            </span></p>

                        </div>
                    )
                })}

            </div>
        );
    }
}

export default GitIssue;
